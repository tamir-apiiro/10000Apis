
const express = require('express')
import {handler6590} from "./handler6590";
const app = express()
app.get('/6590', handler6590)
app.listen(3000, () => {})
        