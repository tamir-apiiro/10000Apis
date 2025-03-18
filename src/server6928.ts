
const express = require('express')
import {handler6928} from "./handler6928";
const app = express()
app.get('/6928', handler6928)
app.listen(3000, () => {})
        