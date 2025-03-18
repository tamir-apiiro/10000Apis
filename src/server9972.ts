
const express = require('express')
import {handler9972} from "./handler9972";
const app = express()
app.get('/9972', handler9972)
app.listen(3000, () => {})
        