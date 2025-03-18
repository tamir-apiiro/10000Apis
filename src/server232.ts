
const express = require('express')
import {handler232} from "./handler232";
const app = express()
app.get('/232', handler232)
app.listen(3000, () => {})
        