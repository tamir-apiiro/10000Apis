
const express = require('express')
import {handler9957} from "./handler9957";
const app = express()
app.get('/9957', handler9957)
app.listen(3000, () => {})
        