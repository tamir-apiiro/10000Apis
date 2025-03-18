
const express = require('express')
import {handler3055} from "./handler3055";
const app = express()
app.get('/3055', handler3055)
app.listen(3000, () => {})
        