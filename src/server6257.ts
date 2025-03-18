
const express = require('express')
import {handler6257} from "./handler6257";
const app = express()
app.get('/6257', handler6257)
app.listen(3000, () => {})
        