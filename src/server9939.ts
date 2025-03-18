
const express = require('express')
import {handler9939} from "./handler9939";
const app = express()
app.get('/9939', handler9939)
app.listen(3000, () => {})
        