
const express = require('express')
import {handler6103} from "./handler6103";
const app = express()
app.get('/6103', handler6103)
app.listen(3000, () => {})
        