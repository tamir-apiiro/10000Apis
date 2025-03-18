
const express = require('express')
import {handler6662} from "./handler6662";
const app = express()
app.get('/6662', handler6662)
app.listen(3000, () => {})
        