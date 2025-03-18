
const express = require('express')
import {handler6105} from "./handler6105";
const app = express()
app.get('/6105', handler6105)
app.listen(3000, () => {})
        