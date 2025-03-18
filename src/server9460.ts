
const express = require('express')
import {handler9460} from "./handler9460";
const app = express()
app.get('/9460', handler9460)
app.listen(3000, () => {})
        