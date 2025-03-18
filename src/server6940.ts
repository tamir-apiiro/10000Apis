
const express = require('express')
import {handler6940} from "./handler6940";
const app = express()
app.get('/6940', handler6940)
app.listen(3000, () => {})
        