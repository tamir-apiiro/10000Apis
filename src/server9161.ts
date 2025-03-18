
const express = require('express')
import {handler9161} from "./handler9161";
const app = express()
app.get('/9161', handler9161)
app.listen(3000, () => {})
        