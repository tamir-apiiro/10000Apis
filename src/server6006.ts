
const express = require('express')
import {handler6006} from "./handler6006";
const app = express()
app.get('/6006', handler6006)
app.listen(3000, () => {})
        