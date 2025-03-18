
const express = require('express')
import {handler9818} from "./handler9818";
const app = express()
app.get('/9818', handler9818)
app.listen(3000, () => {})
        