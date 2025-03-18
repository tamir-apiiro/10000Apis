
const express = require('express')
import {handler9794} from "./handler9794";
const app = express()
app.get('/9794', handler9794)
app.listen(3000, () => {})
        