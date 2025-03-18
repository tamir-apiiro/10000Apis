
const express = require('express')
import {handler224} from "./handler224";
const app = express()
app.get('/224', handler224)
app.listen(3000, () => {})
        