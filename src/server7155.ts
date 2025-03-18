
const express = require('express')
import {handler7155} from "./handler7155";
const app = express()
app.get('/7155', handler7155)
app.listen(3000, () => {})
        