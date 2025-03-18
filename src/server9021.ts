
const express = require('express')
import {handler9021} from "./handler9021";
const app = express()
app.get('/9021', handler9021)
app.listen(3000, () => {})
        