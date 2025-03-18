
const express = require('express')
import {handler9451} from "./handler9451";
const app = express()
app.get('/9451', handler9451)
app.listen(3000, () => {})
        