
const express = require('express')
import {handler928} from "./handler928";
const app = express()
app.get('/928', handler928)
app.listen(3000, () => {})
        