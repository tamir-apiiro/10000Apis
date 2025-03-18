
const express = require('express')
import {handler6071} from "./handler6071";
const app = express()
app.get('/6071', handler6071)
app.listen(3000, () => {})
        