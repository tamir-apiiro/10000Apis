
const express = require('express')
import {handler9845} from "./handler9845";
const app = express()
app.get('/9845', handler9845)
app.listen(3000, () => {})
        