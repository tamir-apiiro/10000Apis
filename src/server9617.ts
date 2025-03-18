
const express = require('express')
import {handler9617} from "./handler9617";
const app = express()
app.get('/9617', handler9617)
app.listen(3000, () => {})
        