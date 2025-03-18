
const express = require('express')
import {handler7257} from "./handler7257";
const app = express()
app.get('/7257', handler7257)
app.listen(3000, () => {})
        