
const express = require('express')
import {handler9095} from "./handler9095";
const app = express()
app.get('/9095', handler9095)
app.listen(3000, () => {})
        