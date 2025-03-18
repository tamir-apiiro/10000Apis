
const express = require('express')
import {handler8648} from "./handler8648";
const app = express()
app.get('/8648', handler8648)
app.listen(3000, () => {})
        