
const express = require('express')
import {handler9755} from "./handler9755";
const app = express()
app.get('/9755', handler9755)
app.listen(3000, () => {})
        