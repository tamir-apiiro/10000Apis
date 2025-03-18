
const express = require('express')
import {handler9072} from "./handler9072";
const app = express()
app.get('/9072', handler9072)
app.listen(3000, () => {})
        