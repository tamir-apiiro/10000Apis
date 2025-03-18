
const express = require('express')
import {handler9257} from "./handler9257";
const app = express()
app.get('/9257', handler9257)
app.listen(3000, () => {})
        