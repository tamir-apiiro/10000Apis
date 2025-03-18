
const express = require('express')
import {handler9581} from "./handler9581";
const app = express()
app.get('/9581', handler9581)
app.listen(3000, () => {})
        