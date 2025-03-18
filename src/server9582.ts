
const express = require('express')
import {handler9582} from "./handler9582";
const app = express()
app.get('/9582', handler9582)
app.listen(3000, () => {})
        