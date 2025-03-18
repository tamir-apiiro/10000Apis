
const express = require('express')
import {handler6047} from "./handler6047";
const app = express()
app.get('/6047', handler6047)
app.listen(3000, () => {})
        