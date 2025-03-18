
const express = require('express')
import {handler9792} from "./handler9792";
const app = express()
app.get('/9792', handler9792)
app.listen(3000, () => {})
        