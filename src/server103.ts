
const express = require('express')
import {handler103} from "./handler103";
const app = express()
app.get('/103', handler103)
app.listen(3000, () => {})
        