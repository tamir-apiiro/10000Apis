
const express = require('express')
import {handler9419} from "./handler9419";
const app = express()
app.get('/9419', handler9419)
app.listen(3000, () => {})
        