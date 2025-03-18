
const express = require('express')
import {handler649} from "./handler649";
const app = express()
app.get('/649', handler649)
app.listen(3000, () => {})
        