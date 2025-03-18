
const express = require('express')
import {handler9789} from "./handler9789";
const app = express()
app.get('/9789', handler9789)
app.listen(3000, () => {})
        