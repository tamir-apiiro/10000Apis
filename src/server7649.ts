
const express = require('express')
import {handler7649} from "./handler7649";
const app = express()
app.get('/7649', handler7649)
app.listen(3000, () => {})
        