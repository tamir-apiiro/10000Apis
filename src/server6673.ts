
const express = require('express')
import {handler6673} from "./handler6673";
const app = express()
app.get('/6673', handler6673)
app.listen(3000, () => {})
        