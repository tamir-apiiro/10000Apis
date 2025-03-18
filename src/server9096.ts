
const express = require('express')
import {handler9096} from "./handler9096";
const app = express()
app.get('/9096', handler9096)
app.listen(3000, () => {})
        