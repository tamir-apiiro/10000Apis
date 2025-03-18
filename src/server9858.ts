
const express = require('express')
import {handler9858} from "./handler9858";
const app = express()
app.get('/9858', handler9858)
app.listen(3000, () => {})
        