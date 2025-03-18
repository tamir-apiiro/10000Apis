
const express = require('express')
import {handler6477} from "./handler6477";
const app = express()
app.get('/6477', handler6477)
app.listen(3000, () => {})
        