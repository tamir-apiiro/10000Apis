
const express = require('express')
import {handler896} from "./handler896";
const app = express()
app.get('/896', handler896)
app.listen(3000, () => {})
        