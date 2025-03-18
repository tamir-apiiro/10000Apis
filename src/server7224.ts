
const express = require('express')
import {handler7224} from "./handler7224";
const app = express()
app.get('/7224', handler7224)
app.listen(3000, () => {})
        