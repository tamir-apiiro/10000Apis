
const express = require('express')
import {handler9768} from "./handler9768";
const app = express()
app.get('/9768', handler9768)
app.listen(3000, () => {})
        