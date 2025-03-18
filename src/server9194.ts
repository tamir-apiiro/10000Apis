
const express = require('express')
import {handler9194} from "./handler9194";
const app = express()
app.get('/9194', handler9194)
app.listen(3000, () => {})
        