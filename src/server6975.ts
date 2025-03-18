
const express = require('express')
import {handler6975} from "./handler6975";
const app = express()
app.get('/6975', handler6975)
app.listen(3000, () => {})
        