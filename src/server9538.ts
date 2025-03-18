
const express = require('express')
import {handler9538} from "./handler9538";
const app = express()
app.get('/9538', handler9538)
app.listen(3000, () => {})
        