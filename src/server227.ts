
const express = require('express')
import {handler227} from "./handler227";
const app = express()
app.get('/227', handler227)
app.listen(3000, () => {})
        