
const express = require('express')
import {handler9019} from "./handler9019";
const app = express()
app.get('/9019', handler9019)
app.listen(3000, () => {})
        