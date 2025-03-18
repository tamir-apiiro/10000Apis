
const express = require('express')
import {handler9834} from "./handler9834";
const app = express()
app.get('/9834', handler9834)
app.listen(3000, () => {})
        