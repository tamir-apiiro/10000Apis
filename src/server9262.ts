
const express = require('express')
import {handler9262} from "./handler9262";
const app = express()
app.get('/9262', handler9262)
app.listen(3000, () => {})
        