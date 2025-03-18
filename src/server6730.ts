
const express = require('express')
import {handler6730} from "./handler6730";
const app = express()
app.get('/6730', handler6730)
app.listen(3000, () => {})
        