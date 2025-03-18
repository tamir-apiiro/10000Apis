
const express = require('express')
import {handler9892} from "./handler9892";
const app = express()
app.get('/9892', handler9892)
app.listen(3000, () => {})
        